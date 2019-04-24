import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Layout, Icon } from 'antd'
import * as styles from './index.scss'
import SiderMenu from './Menu'

interface IStoreProps {
    sideBarCollapsed?: boolean
}

@inject(
    (store: IStore): IStoreProps => {
        const { globalStore } = store
        const { sideBarCollapsed } = globalStore
        return {
            sideBarCollapsed,
        }
    }
)
@observer
class Sider extends React.Component<IStoreProps> {

    render() {
        const { sideBarCollapsed } = this.props
        return (
            <Layout.Sider
                className={styles.sider}
                trigger={null}
                theme='dark'
                collapsible
                collapsed={sideBarCollapsed}
            >
                <div className={styles.logoBox}>
                    {/* <div className={styles.logo}></div>
                 */}
                    <img src='data:image/gif;base64,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' />
                </div>
                <SiderMenu />
            </Layout.Sider>
        )
    }
}

export default Sider