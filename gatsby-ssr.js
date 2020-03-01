import userbase from "userbase-js"

export const onClientEntry = (_, options) => {
  userbase.init({ appId: options.APP_ID })
}
