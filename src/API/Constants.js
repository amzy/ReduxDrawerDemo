export default class Constants {
    static  kAppDisplayName              = "Your App Name"
    static  kAppVersion                  = "Your App Version"
    static  kPerPage                     = 20
    static  kGoogleAPIKey                = "AIzaSyDhUxXQBB2dcIpn5yWz-2pukgKxG-N21L8" //syon.manish@gmail.com [WhyQ-IOS]
    static  kAPIVersion                  = "1.0"
    static  kAuthAPIKey                  = "CRBF7BNLT8YGMwpbQkwJaSv2xjkypW"
    static  kDeviceType                  = "i"
    
    static  kHeaders = { "X-API-KEY":   Constants.kAuthAPIKey,
                          "Device-Type": Constants.kDeviceType,
                          "App-Version": Constants.kAppVersion,
                          "Api-Version": Constants.kAPIVersion }
}
