import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Button } from 'antd'
import Search from './Search'
import { ComponentExt } from '@utils/reactExt'
import PortalsBtn from '@components/portalsBtn'

interface IStoreProps {
  routerStore?: RouterStore
}

@inject(
  (store: IStore): IStoreProps => {
    const { routerStore } = store
    return {
      routerStore,
    }
  }
)
@observer
class Header extends ComponentExt<IStoreProps> {

  addWhiteBlack = () => {
    this.props.routerStore.push('/h5Export/add')
  }

  render() {
    return (
      <div className='searchForm'>
        <Search />
        {
          this.$checkAuth('Creative Analysis-Task List-Add', (
            <PortalsBtn querySelector='#h5ExportAddBtn'>
              <Button icon='plus' type="primary" onClick={this.addWhiteBlack}>
                Add
              </Button>
            </PortalsBtn>
          ))
        }
      </div>
    )
  }
}

export default Header
