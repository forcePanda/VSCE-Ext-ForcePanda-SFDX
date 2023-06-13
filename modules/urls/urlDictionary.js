const SETUP_BASE_URL = '/lightning/setup/';

const PAGE_URLS = {
    OUTBOUND_CHANGE_SET_HOME : getPageConfig(
        'Outbound Change Set List',
        SETUP_BASE_URL + 'OutboundChangeSet/home'
    ),
    OUTBOUND_CHANGE_SET_NEW : getPageConfig(
        'New Outbound Change Set',
        SETUP_BASE_URL + 'OutboundChangeSet/page?address=%2Fchangemgmt%2FcreateOutboundChangeSet.apexp'
    ),
    DEV_CONSOLE : getPageConfig(
        'Developer Console',
        '/_ui/common/apex/debug/ApexCSIPage'
    ),
    SETUP : getPageConfig(
        'Setup page',
        SETUP_BASE_URL + 'SetupOneHome/home'
    ),
    HOME : getPageConfig(
        'Home',
        '/'
    ),
    OBJECT_MANAGER : getPageConfig(
        'Object Manager',
        SETUP_BASE_URL + 'ObjectManager/home'
    ),
    FLOWS : getPageConfig(
        'Flows',
        SETUP_BASE_URL + '/Flows/home'
    )
}

function getPageConfig(label, url) {
    return {
        label : label,
        url : url
    }
}

module.exports = {
    PAGE_URLS
};