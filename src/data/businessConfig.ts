/**
 * Central Business Configuration for The English Practice
 *
 * Keep unconfirmed details empty or null as specified.
 * When the business owner provides email, phone, social links, or photos,
 * updating this file will automatically reflect across the entire site.
 */

export interface BusinessConfig {
  businessName: string;
  tagline: string;
  brandDescriptor: string;
  trainerName: string;
  trainerTitle: string;
  trainerQualification: string;
  specialisation: string;
  trainingFormats: string[];
  businessEmail: string;
  phone: string;
  whatsapp: string;
  businessAddress: string;
  city: string;
  websiteUrl: string;
  instagram: string;
  linkedin: string;
  trainerPhoto: string;
  yearsOfExperience: number | null;
  enquiryMethod: 'copy-message' | 'direct-mailto' | 'form-endpoint';
  contactFormEndpoint: string;
}

export const businessConfig: BusinessConfig = {
  businessName: "The English Practice",
  tagline: "English for the Work You Do.",
  brandDescriptor: "Professional English Communication & Language Development",
  trainerName: "Chriselle Dmello",
  trainerTitle: "English Language Teaching Specialist",
  trainerQualification: "Master's in English Language Teaching",
  specialisation: "English for Specific Purposes (ESP)",
  trainingFormats: ["Online Training", "One-to-One Training", "Group Training"],
  businessEmail: "", // Configurable: Add confirmed business email here
  phone: "", // Configurable: Add phone number here
  whatsapp: "", // Configurable: Add WhatsApp number here (e.g. +91XXXXXXXXXX)
  businessAddress: "", // Configurable: Physical address if confirmed
  city: "", // Configurable
  websiteUrl: "", // Configurable: Domain will be configured upon deployment
  instagram: "", // Configurable
  linkedin: "", // Configurable
  trainerPhoto: "", // Configurable: Path to authentic portrait (e.g., /images/chriselle-dmello.jpg)
  yearsOfExperience: null, // Left null until confirmed
  enquiryMethod: 'copy-message', // Switches to 'direct-mailto' or 'form-endpoint' once details are supplied
  contactFormEndpoint: "",
};
