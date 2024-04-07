import { InstallationType } from 'src/app/component/pvmes/model/pvmes.enum';

export const allPVMEs = [
    {
      company: {
        name: "dsdsds",
        siren: "123456789"
      },
      customer: {
        name: "dsdsdsd",
        email: "a@f.fr",
        telephone: "0987654433"
      },
      installation: {
        address: "cdcdcd",
        date: "2024-04-09T22:00:00.000Z",
        numberOfpanels: 1,
        panels: [
          {
            type: InstallationType.HYBRID,
            ID: "123456"
          }
        ]
      }
    },
    {
      company: {
        name: "Arix OWAYE",
        siren: "123456789"
      },
      customer: {
        name: "smith jack",
        email: "smith@j.mail",
        telephone: "0900909989"
      },
      installation: {
        address: "1 Rue du lac Le Muy",
        date: "2024-04-15T22:00:00.000Z",
        numberOfpanels: 1,
        panels: [
          {
            type: InstallationType.HYBRID,
            ID: "123456"
          }
        ]
      }
    }
  ];