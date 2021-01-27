export default {
  data () {
    return {
      tokenDetails: [
        {
          name: 'SimpleBEP20',
          version: '1.0.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: false,
          supplyType: 'Fixed',
          accessType: 'Ownable',
          mintable: false,
          burnable: false,
          removeCopyright: false,
          price: 0,
        },
        {
          name: 'StandardBEP20',
          version: '1.0.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Fixed',
          accessType: 'Ownable',
          mintable: false,
          burnable: false,
          removeCopyright: true,
          price: 2.5,
        },
        {
          name: 'BurnableBEP20',
          version: '1.0.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Fixed',
          accessType: 'Ownable',
          mintable: false,
          burnable: true,
          removeCopyright: true,
          price: 4.5,
        },
        {
          name: 'MintableBEP20',
          version: '1.1.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Capped',
          accessType: 'Ownable',
          mintable: true,
          burnable: false,
          removeCopyright: true,
          price: 5.5,
        },
        {
          name: 'CommonBEP20',
          version: '1.0.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Capped',
          accessType: 'Ownable',
          mintable: true,
          burnable: true,
          removeCopyright: true,
          price: 8.5,
        },
      ],
    };
  },
};
