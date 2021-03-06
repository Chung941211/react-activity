import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { saveData } from "../api/axios";
const StepFrom = props => {

    const [ username, setUsername ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ province, setProvince ] = useState('')
    const [ city, setCity ] = useState('')
    const [ company, setCompany ] = useState('')
    const handleSave = () => {
        if (username === '') {
            return alert('姓名不能为空')
        }
        if (province === '') {
            return alert('地区不能为空')
        }
        if (phone === '') {
            return alert('手机不能为空')
        }
        if (city === '') {
            return alert('所属市不能为空')
        }
        saveData({
            name: username,
            province,
            phone,
            city,
            companyname: company
        }).then(res => {
            alert("登记成功")
        })
    }
    return (
        <div className="defalut-bg">
            <div className="from-bg">
              <div className="from-title">
                  <span>意向登记表</span>
              </div>
              <div className="from-word">如需了解详情，请填写以下信息告诉我们（信息保密，不对外公开），官方服务顾问将在24小时内联系您，请保持电话畅通!</div>
              <div className="from-rows">
                <div className="from-content">
                    <div className="from-name">姓名*</div>
                    <input
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        name="username"
                        type="text"
                        placeholder="请输入姓名"
                    />
                </div>
                <div className="from-content">
                    <div className="from-name">手机*</div>
                    <input
                        value={phone}
                        onChange={event => setPhone(event.target.value)}
                        name="phone"
                        type="text"
                        placeholder="请输入手机"
                    />
                </div>
              </div>
              <div className="from-rows">
                <div className="from-content">
                    <div className="from-name">地区*</div>
                    <input
                        value={province}
                        onChange={event => setProvince(event.target.value)}
                        name="province"
                        type="text"
                        placeholder="请输入省份"
                    />
                </div>
                <div className="from-content">
                    <div className="from-name"></div>
                    <input
                        value={city}
                        onChange={event => setCity(event.target.value)}
                        name="city"
                        type="text"
                        placeholder="请输入市"
                    />
                </div>
              </div>
              <div className="from-rows">
                <div className="from-content">
                    <div className="from-name">公司名</div>
                    <input
                        value={company}
                        onChange={event => setCompany(event.target.value)}
                        name="company"
                        type="text"
                        placeholder="请输入公司名"
                    />
                </div>
              </div>

              <div
                onClick={() => handleSave()}
                className="from-button">立即登记</div>
              <div className="from-tips">
                    <input type="checkbox" />点击立即登记表示你已阅读并同意
                    <Link to="/agreement">隐私政策</Link>
              </div>
            </div>
        </div>
    )
}

export default StepFrom