  import React,{ useState } from 'react';
  import { SafeOnRampKit, StripePack } from '@safe-global/onramp-kit';

  //OnRampKit Provider : Enable purchase of Eth on a decentralize wallet with Credit card/Bank transfer
  export const OnRampKitProvider = () => {

    const [onRampClient, setOnRampClient] = useState();
    const [safeSelected, setSafeSelected] = useState('')

    const openStripeWidget = async () => {
        const onRampClient = await SafeOnRampKit.init(
            new StripePack({
              stripePublicKey:"pk_test_51MZbmZKSn9ArdBimSyl5i8DqfcnlhyhJHD8bF2wKrGkpvNWyPvBAYtE211oHda0X3Ea1n4e9J9nh2JkpC7Sxm5a200Ug9ijfoO",
              onRampBackendUrl:"https://aa-stripe.safe.global"
            })
          )

        const sessionData = await onRampClient.open({
          element: '#stripe-root',
          defaultOptions: {
            transaction_details: {
              wallet_address: safeSelected,
              supported_destination_networks: ['gnosis'],
              supported_destination_currencies: ['ether'],
              lock_wallet_address: true
            },
            customer_information: {
              email: 'test@eth.com'
            }
          }
        })

        setOnRampClient(onRampClient)
        console.log('Stripe sessionData: ', sessionData)
    }
  }