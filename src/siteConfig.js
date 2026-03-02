const raw = {
  siteName: "CarterRigert",
  tagline: "Test2",
  aboutText: "",
  primaryColor: "#3a7bd5",
  service1: { title: "", description: "" },
  service2: { title: "", description: "" },
  service3: { title: "", description: "" },
  contact: {
    email: "",
    phone: "",
    address: ""
  },
  social: {
    instagram: "",
    facebook: ""
  }
};

const isPlaceholder = (v) => !v || v.startsWith('{{');

const siteConfig = {
  ...raw,
  primaryColor: isPlaceholder(raw.primaryColor) ? '#555555' : raw.primaryColor,
};

export default siteConfig;
