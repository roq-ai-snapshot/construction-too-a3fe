interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View tools',
    'Request tool rentals',
    'View personal user information',
    'Update personal user information',
  ],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage tools', 'Manage rental requests'],
  getQuoteUrl: 'https://app.roq.ai/proposal/5af0d0c5-4914-489d-b9b9-dc325a850d2e',
};
