// type CaseStudy = {
//   title: string;
//   description: string;
//   order: number;
//   featureImg: [Object];
//   sections: [Array];
//   roles: [Array];
//   technologies: [Array];
// };

type Category = {
  id: string;
  data: { title: string; description?: string; url?: string };
  collection?: string;
};
