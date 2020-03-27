import * as React from 'react'
import * as Kb from '../../common-adapters/mobile.native'
import * as Styles from '../../styles'
import Notifications from './render'
import TurnOnNotifications from './turn-on-notifications.native'
import {Props} from '.'

const MobileNotifications = (props: Props) => (
  <Kb.HeaderHocWrapper title="Notifications" onBack={props.onBack}>
    <Kb.NativeScrollView style={{...Styles.globalStyles.flexBoxColumn, flex: 1}}>
      {!props.mobileHasPermissions && <TurnOnNotifications />}
      <Notifications {...props} />
    </Kb.NativeScrollView>
  </Kb.HeaderHocWrapper>
)

export default MobileNotifications
