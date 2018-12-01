import { SidenavMenu } from './sidenav-menu.model';

export const sidenavMenuItems = [ 
    new SidenavMenu (1, 'Home', '/', null, null, false, 0),
    new SidenavMenu (2, 'RFQ', null, '/', null, false, 0), 
    new SidenavMenu (3, 'Quotes', null, '/', null, false, 0), 
    new SidenavMenu (4, 'Notifications', null, '/', null, false, 0),
    new SidenavMenu (5, 'Manage / Setup Site', null, '/', null, false, 0),
    new SidenavMenu (6, 'Networks', null, '/', null, false, 0),
    new SidenavMenu (7, 'Tools', null, '/', null, false, 0),
    new SidenavMenu (8, 'Products', null, '/', null, false, 0),
    new SidenavMenu (9, 'Promotions', null, '/', null, false, 0)
]

export const sellerSideNavMenuItems = [
    new SidenavMenu (1, 'Home', '/', null, null, false, 0),
    new SidenavMenu (2, 'RFQ', null, '/', null, false, 0), 
    new SidenavMenu (3, 'Quotes', null, '/', null, false, 0), 
    new SidenavMenu (4, 'Promotions', null, '/', null, false, 0),
    new SidenavMenu (5, 'Products', null, '/', null, false, 0)
]