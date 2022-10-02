import classnames from 'classnames';

type Props = {
  active: boolean;
  className?: string;
  onClick: () => void;
};
export default function Burger({ active, onClick, className }: Props) {
  return (
    <div className={classnames("burger", className, { active })} onClick={onClick}>
      <div className={"meat meat-1"} />
      <div className={"meat meat-2"} />
      <div className={"meat meat-3"} />
    </div>
  );
}
