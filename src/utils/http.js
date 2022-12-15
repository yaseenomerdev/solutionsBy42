const baseUrl = "https://635e3bbe03d2d4d47aea4f1f.mockapi.io";

export const httpClient = async (url, options = undefined) => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method: options?.method || "GET",
    headers: {
      "Content-Type": "application/json",
    },
    ...(options?.body && { body: JSON.stringify(options.body) }),
  });
  const data = await response.json();

  return data;
};

/**
 *
 * @param {*} page
 * @param {*} limit
 * @returns
 */
export const getOrders = async (page = 0, limit = 0) => {
  const url = page && limit ? `login?page=${page}&limit=${limit}` : `login`;

  try {
    const orders = await httpClient(url);
    return orders.map((order, n) => ({
      ...order,
      id: "2434" + order?.id,
      paymentAmount: "20,000",
      repaymentPeriod: "6",
      totalProfit: "5,000",
      isEligible: Number(order.id) % 2 == 0 ? true : false,
    }));
  } catch (error) {
    return [];
  }
};
