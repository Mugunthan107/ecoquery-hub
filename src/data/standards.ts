
export interface Standard {
  id: string;
  title: string;
  source: string;
  category: string;
  summary: string;
  tags: string[];
  content: string;
  year: number;
}

export const standardsData: Standard[] = [
  {
    id: "1",
    title: "Central Pollution Control Board Noise Standards",
    source: "CPCB",
    category: "Noise",
    summary: "Standards for noise pollution limits in industrial, commercial, residential and silence zones.",
    tags: ["CPCB", "Noise", "Industry", "Pollution"],
    content: "The ambient air quality standards in respect of noise in industrial areas: Day time (6 AM to 10 PM) - 75 dB, Night time (10 PM to 6 AM) - 70 dB. Commercial areas: Day time - 65 dB, Night time - 55 dB. Residential areas: Day time - 55 dB, Night time - 45 dB. Silence zones: Day time - 50 dB, Night time - 40 dB.",
    year: 2000
  },
  {
    id: "2",
    title: "National Green Tribunal Act on Water Pollution",
    source: "NGT",
    category: "Water",
    summary: "Guidelines on industrial discharge limits and treatment for water bodies.",
    tags: ["NGT", "Water", "Industry", "Discharge", "Pollution"],
    content: "The permissible limits for discharge of industrial effluents into water bodies include: pH between 5.5 to 9.0, Suspended solids max 100 mg/L, BOD 30 mg/L, COD 250 mg/L, Oil & grease 10 mg/L. Industries must install proper effluent treatment plants and ensure continuous monitoring of discharge quality.",
    year: 2010
  },
  {
    id: "3",
    title: "Bureau of Energy Efficiency Standards for Power Plants",
    source: "BEE",
    category: "Energy",
    summary: "Energy efficiency norms and guidelines for thermal power plants in India.",
    tags: ["BEE", "Energy", "Power Plants", "Efficiency"],
    content: "Thermal power plants should achieve minimum 36% efficiency for units above 500 MW. For units between 200-500 MW, the target efficiency is 34%. All plants must install continuous emission monitoring systems. New plants should incorporate supercritical technology and waste heat recovery systems to maximize energy utilization.",
    year: 2015
  },
  {
    id: "4",
    title: "ISO 14001 Environmental Management Systems",
    source: "ISO",
    category: "Management",
    summary: "International standard for effective environmental management systems implementation.",
    tags: ["ISO", "Management", "Environmental", "Certification"],
    content: "ISO 14001 specifies requirements for an environmental management system that organizations can use to enhance environmental performance. It helps organizations implement a systematic approach to environmental management through the Plan-Do-Check-Act (PDCA) cycle. Key elements include environmental policy, planning, implementation, performance evaluation, and management review.",
    year: 2015
  },
  {
    id: "5",
    title: "Emission Standards for Cement Industry",
    source: "CPCB",
    category: "Air",
    summary: "Emission limits and control technologies for cement manufacturing plants.",
    tags: ["CPCB", "Air", "Cement", "Emission", "Industry"],
    content: "Cement plants must limit particulate matter emissions to 30 mg/Nm³. SOx emissions should not exceed 100 mg/Nm³. NOx emissions must be below 600 mg/Nm³ for rotary kilns. All cement plants must install continuous emission monitoring systems and report data to regulatory authorities. Bag house filters or electrostatic precipitators are mandatory for dust control.",
    year: 2014
  },
  {
    id: "6",
    title: "E-Waste Management Rules",
    source: "MoEF",
    category: "Waste",
    summary: "Regulations for handling, storage, transportation and recycling of electronic waste.",
    tags: ["MoEF", "E-Waste", "Recycling", "Management"],
    content: "E-waste generators must segregate e-waste from other waste streams. Manufacturers must implement Extended Producer Responsibility (EPR) and collect e-waste equivalent to 30% of their sales volume. Dismantling and recycling facilities must obtain authorization from State Pollution Control Boards. Collection centers must maintain records of e-waste collected and processed.",
    year: 2016
  },
  {
    id: "7",
    title: "Green Building Standards (GRIHA)",
    source: "GRIHA Council",
    category: "Construction",
    summary: "Green Rating for Integrated Habitat Assessment for sustainable building practices.",
    tags: ["GRIHA", "Green Building", "Construction", "Sustainability"],
    content: "GRIHA-rated buildings must optimize energy consumption by 20-30% above ECBC standards. Water consumption should be reduced by 30% through rainwater harvesting and recycling. Minimum 15% of total site area should be under vegetation. Building materials must have recycled content of at least 15%. Natural light and ventilation should be maximized for energy conservation.",
    year: 2019
  },
  {
    id: "8",
    title: "Biomedical Waste Management Rules",
    source: "MoEF",
    category: "Waste",
    summary: "Guidelines for handling, treatment and disposal of biomedical waste.",
    tags: ["MoEF", "Biomedical", "Waste", "Healthcare"],
    content: "Biomedical waste must be segregated at point of generation into color-coded bags: Yellow for incineration, Red for sterilization, White for autoclaving, and Blue for sharp objects. Healthcare facilities generating 2kg or more waste per day require authorization. Common treatment facilities must install real-time emission monitoring systems. Transportation vehicles must be dedicated and properly labeled.",
    year: 2016
  },
  {
    id: "9",
    title: "Solar Power Plant Standards",
    source: "MNRE",
    category: "Energy",
    summary: "Technical specifications and guidelines for solar PV power plant installation.",
    tags: ["MNRE", "Solar", "Renewable", "Energy"],
    content: "Crystalline silicon modules should have minimum efficiency of 15%. Inverters must have minimum efficiency of 97%. Module mounting structures must withstand wind speeds up to 150 km/h. Comprehensive monitoring system with remote access is mandatory. Plants must achieve minimum Performance Ratio of 75% and Capacity Utilization Factor of 19% annually.",
    year: 2017
  },
  {
    id: "10",
    title: "Plastic Waste Management Rules",
    source: "MoEF",
    category: "Waste",
    summary: "Regulations for handling, collection, and disposal of plastic waste.",
    tags: ["MoEF", "Plastic", "Waste", "Recycling"],
    content: "Plastic carry bags must be at least 50 microns thick. Producers and brand owners using plastic packaging must establish a system for collecting back plastic waste. Local bodies responsible for setting up infrastructure for segregation, collection, and disposal of plastic waste. Retailers and street vendors should not use plastic bags unless registered with local bodies.",
    year: 2016
  }
];
