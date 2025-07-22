import { AirplanesSvg } from '../components/svg/airplane-engines.svg';

/*export const IconComponent = ({ Icon, text }) => (
  <div>
    {Icon ? (
      <span>
        <Icon />
      </span>
    ) : <AirplanesSvg />}
    &nbsp;
    {text ? <span>{text}</span> : 'Cargando...'}
  </div>
);*/

export const IconComponent = ({ children, Icon = AirplanesSvg, text = 'Cargando v2...' }) => (
  <div>
    <span>
        <Icon />
    </span>
    &nbsp;
    <span>{text}</span>
    &nbsp;
    {children}
  </div>
);