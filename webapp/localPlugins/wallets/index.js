import Wallet from './Wallet';

export const metadata = {
  name: 'wallets',
  author: 'bcoin-org',
  order: 1,
  icon: 'hdd-o',
  sidebar: true,
  parent: ''
};

export const decoratePanel = (Panel, { React, PropTypes }) => {
  return class DecoratedWallet extends React.Component {
    static displayName() {
      return 'bPanel Wallet';
    }

    static get propTypes() {
      return {
        customChildren: PropTypes.array
      };
    }

    render() {
      const { customChildren = [] } = this.props;
      const pluginData = {
        name: metadata.name,
        Component: Wallet
      };
      return (
        <Panel
          {...this.props}
          customChildren={customChildren.concat(pluginData)}
        />
      );
    }
  };
};