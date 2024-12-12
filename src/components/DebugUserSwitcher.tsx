import React, { useState } from "react"
import { Link } from "react-router"
import { useUserInfo } from "../hooks/useUserInfo"
import { applicationRoutes, PageNames } from "../router/routes"
import { UserRights } from "../utils/types"

export function DebugUserSwitcher() {
  const [selectedUserRights, setSelectedUserRights] = useState<UserRights>(
    UserRights.VISITOR
  )
  const { setUserInfo } = useUserInfo()

  const onRadioButtonClick = (rights: UserRights) => {
    setSelectedUserRights(rights)
    setUserInfo({ isLoggedIn: rights !== UserRights.VISITOR, rights })
  }

  return (
    <form>
      <fieldset>
        <legend>DEBUG - RIGHTS</legend>
        <div>
          {Object.values(UserRights).map((rights) => (
            <label key={rights}>
              <input
                type="radio"
                name="user"
                checked={rights === selectedUserRights}
                onChange={() => onRadioButtonClick(rights)}
              />
              {rights}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>DEBUG - NAVIGATION</legend>
        <Link to={applicationRoutes[PageNames.HOMEPAGE].path}>
          {PageNames.HOMEPAGE}
        </Link>
        {` | `}
        <Link to={applicationRoutes[PageNames.LOGIN_PAGE].path}>
          {PageNames.LOGIN_PAGE}
        </Link>
        {` | `}
        <Link to={applicationRoutes[PageNames.PAGE_FOR_EVERYONE].path}>
          {PageNames.PAGE_FOR_EVERYONE}
        </Link>
      </fieldset>
    </form>
  )
}
