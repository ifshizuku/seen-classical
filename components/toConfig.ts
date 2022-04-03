// // Configuration File (YAML) migration
import metaFile from "js-yaml-loader!../config/_config.meta.yml"
import hvFile from "js-yaml-loader!../config/_config.hv.yml"
import svProfileFile from "js-yaml-loader!../config/_config.sv.profile.yml"
import svSkillsFile from "js-yaml-loader!../config/_config.sv.skills.yml"
import svSocialFile from "js-yaml-loader!../config/_config.sv.social.yml"
import svConnectFile from "js-yaml-loader!../config/_config.sv.connect.yml"

// Parse YAML and Export
export const metaConfig = metaFile
export const hvConfig = hvFile
export const svProfileConfig = svProfileFile
export const svSkillsConfig = svSkillsFile
export const svSocialConfig = svSocialFile
export const svConnectConfig = svConnectFile
