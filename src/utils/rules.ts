import { Rule } from 'antd/es/form';
type ClaimRulesTypes = {
  email: Rule[];
  requestReference: Rule[];
  object: Rule[];
  description: Rule[];
}
type ContactRulesTypes = {
    firstName: Rule[];
    lastName: Rule[];
    email: Rule[];
    phoneNumber: Rule[];
    message: Rule[];
}

const claimRules: ClaimRulesTypes = {
  email: [
      { required: true, message: "Champs obligatoire!" },
      { type: "email", message: "E-mail non valide" },
      { max: 250, message: "champs non valide"}
  ],
  requestReference: [
    { max: 250, message: "champs non valide"}
  ],
  object: [
      { required: true, message: "Champs obligatoire!" },
      { max: 250, message: "champs non valide"}
  ],
  description: [
      { required: true, message: "Champs obligatoire!" },
      { max: 250, message: "champs non valide"}
  ]

}

const contactRules: ContactRulesTypes = {
    email: [
        { required: true, message: "Veuillez saisir votre Email" },
        { type: "email", message: "E-mail non valide" },
        { max: 250, message: "champs non valide"}
    ],
    message: [
        { required: true, message: "Veuillez saisir votre message!" },
        { max: 250, message: "champs non valide"}
    ],
    lastName: [
        { required: true, message: "Veuillez saisir votre nom" },
        { max: 250, message: "champs non valide"}
    ],
    firstName: [
        { required: true, message: "Veuillez saisir votre Prénom" },
        { max: 250, message: "champs non valide"}
    ],
    phoneNumber: [
        { required: true, message: "Veuillez saisir votre Numéro de télephone" },
        { max: 250, message: "champs non valide"}
    ]

}


export const  getClaimRules = (field: keyof ClaimRulesTypes): Rule[] =>
  claimRules[field as keyof ClaimRulesTypes];

export const  getContactRules = (field: keyof ContactRulesTypes): Rule[] =>
    contactRules[field as keyof ContactRulesTypes];