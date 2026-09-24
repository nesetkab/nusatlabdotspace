import Cpu from '@lucide/astro/icons/cpu';
import CodeXml from '@lucide/astro/icons/code-xml';
import Orbit from '@lucide/astro/icons/orbit';
import BriefcaseBusiness from '@lucide/astro/icons/briefcase-business';

export const teams = [
  { name: 'Hardware', what: 'structures, circuit boards, power, and firmware', Icon: Cpu },
  { name: 'Software', what: 'flight and ground-station code', Icon: CodeXml },
  { name: 'Simulations', what: 'orbits, dynamics, and mission analysis', Icon: Orbit },
  { name: 'Business', what: 'proposals, funding, outreach, and operations', Icon: BriefcaseBusiness },
];
