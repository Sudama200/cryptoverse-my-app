import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Avatar, Menu } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
// const {Title} = Typography;


const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>CrytoWorld</Link>
                </Typography.Title>
            </div>
                <Menu theme='dark'>
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to='/exchanges'>Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to='/news'>news</Link>
                    </Menu.Item>
                </Menu>

                {/* <Button className='menu-control-container'>

            </Button> */}
        </div>
    )
}

export default Navbar