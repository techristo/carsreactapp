const carSettings = {
  version: "CKONFIG 5.1",
  baseCost: 10000,

  model: {
    title: "Model",
    type: "model",
    options: [
      { value: "proRS3", label: "PRO RS3", cost: 400 },
      { value: "uberRS2", label: "UBER RS2", cost: 500 },
      {
        value: "standard",
        label: "STANDARD",
        cost: 300,
        incompatible: { engine: ["engine3"], gearbox: ["manual"] }
      },
      { value: "wk", label: "WK", cost: 350 }
    ],
    defaultValue: "standard"
  },

  engine: {
    title: "Engine",
    type: "engine",
    options: [
      { value: "5.2l532bhp", label: "4.2L 532BHP", cost: 100 },
      { value: "4.2l443bhp", label: "4.2L 443BHP", cost: 200 },
      {
        value: "engine3",
        label: "engine3",
        cost: 300,
        incompatible: { model: ["standard"] }
      },
      { value: "engine4", label: "engine4", cost: 400 }
    ],
    defaultValue: "5.2l532bhp"
  },

  gearbox: {
    title: "Gearbox",
    type: "gearbox",
    options: [
      {
        value: "manual",
        label: "Manual",
        cost: 100,
        incompatible: { model: ["standard"] }
      },
      { value: "automatic", label: "Automatic", cost: 100 }
    ],
    defaultValue: "automatic"
  },

  color: {
    title: "Color",
    type: "color",
    options: [
      { value: "red", label: "red", cost: 100 },
      { value: "lightgrey", label: "lightgrey", cost: 100 },
      { value: "saddlebrown", label: "saddlebrown", cost: 100 },
      { value: "black", label: "black", cost: 100 }
    ],
    defaultValue: "red"
  }
};

export default carSettings;
