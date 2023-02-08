export const getPrice = async (item, Moralis, chain) => {
  return new Promise((resp, rej) => {
    const response = Moralis.EvmApi.token
      .getTokenPrice({
        address: item.token_address,
        chain,
      })
      .then((res) => {
        setTimeout(() => resp(res), 2000);
      })
      .catch((err) => rej(err));
  });
};
