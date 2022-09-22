interface PersonalInfo {
    name: string, 
    homeAddress: {
         country: string, 
         zip: string, 
         address: string
         }
}

export default function checkPersonalInfo(personalInfo: PersonalInfo) {
    if(personalInfo.name === '' ||
        personalInfo.homeAddress.country === '' || 
        personalInfo.homeAddress.zip === '' ||
        personalInfo.homeAddress.address === ''){
            return false;
        }
    return true;
}