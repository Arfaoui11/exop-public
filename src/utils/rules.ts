import { Rule } from 'antd/es/form';
type ClaimRulesTypes = {
  email: Rule[];
  requestReference: Rule[];
  object: Rule[];
  description: Rule[];
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

export const  getClaimRules = (field: keyof ClaimRulesTypes): Rule[] =>
  claimRules[field as keyof ClaimRulesTypes];