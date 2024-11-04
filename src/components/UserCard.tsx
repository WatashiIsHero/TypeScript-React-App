import { Props } from '../types/userProfile';

type types = {
  user: Props;
};

export const UserCard: React.VFC<types> = (props) => {
  const { user } = props;

  const style = {
    border: 'solid 1px',
    borderRadius: '8px',
    padding: '0 5px',
    margin: '0 10px',
  };

  return (
    <div style={style}>
      <dl>
        <dt>氏名</dt>
        <dd>{user.name}</dd>
        <dt>メアド</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};
