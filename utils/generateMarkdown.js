/**
 * Handles generation of a license badge link if license is provided.
 * @param {string} license
 * @returns {string} Corresponding license badge as a string, empty if no license provided
 */
function renderLicenseBadge(license) {
  license ? renderLicenseLink(license) : "";
}

/**
 * Returns license badge link.
 * @param {string} license
 * @returns {string} License badge link as a string
 */
function renderLicenseLink(license) {
  switch (license) {
    case "No license":
      return ""
    case  "MIT":
      
    case  "ISC":
      
    case "Apache License 2.0": 
    
    case "GNU GPLv2":
      
    case "GNU GPLv3": 
    
    case "GNU AGPLv3":
      
    case "GNU LGPLv3":
      
    case "Mozilla Public License 2.0":

    case "Apache License 2.0":
      
    case "Boost Software License 1.0":
      
    case "The Unlicense":
  }
  return "";
}

/**
 * Returns the license section of README.
 * @param {string} license
 * @returns {string} License section of README, empty if no license provided
 */
function renderLicenseSection(license) {
  return `This repo uses the ${license} license`
}

/**
 * Generates markdown for README.
 * @param 
 * @returns
 */
function generateMarkdown(data) {
  return [renderLicenseSection(data.license), renderLicenseBadge(data.license)];
}

module.exports = generateMarkdown;
