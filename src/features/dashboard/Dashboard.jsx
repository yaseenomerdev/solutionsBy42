import React from "react";
import { getOrders } from "../../utils/http";
import FinancingList from "./FinancingList";
import Header from "./Header";
import Hero from "./Hero";

function Dashboard() {
  const [orders, setOrders] = React.useState([]);
  const [all, setAll] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  const nextPage = async () => {
    setPage((prv) => (prv += 1));
    setOrders(await getOrders(page, limit));
  };

  const prvPage = async () => {
    setPage((prv) => (prv -= 1));
    setOrders(await getOrders(page, limit));
  };

  const filterByStatus = async (e) => {
    const value = e.target.value;

    const orders = await getOrders(page, limit);

    if (value === "no") return setOrders(orders);

    return setOrders(
      orders.filter(({ isEligible }) => isEligible === (value === "true"))
    );
  };

  React.useEffect(() => {
    (async function () {
      setAll(await getOrders());
      setOrders(await getOrders(page, limit));
    })();
  }, []);
  return (
    <div>
      <section
        style={{
          backgroundImage: "url('dashboard/rectangle.webp')",
          backgroundRepeat: "no-repeat",
        }}
        //  className="bg-[url('dashboard/rectangle.webp')] bg-no-repeat"
      >
        <Header />

        <Hero />
      </section>

      <section className="mx-5 my-7 shadow-md p-5 overflow-hidden">
        <h1 className="font-bold">قائمة طلبات التمويل</h1>

        <FinancingList />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <span className="text-primary font-bold">تصفية</span>

            <label className="relative text-gray-400 focus-within:text-gray-600 block">
              <img
                src="dashboard/search-blue.webp"
                className="pointer-events-none w-[16px] h-[16px] absolute top-1/2 transform -translate-y-1/2 left-3"
              />

              <input
                type="text"
                className="rounded-none w-[250px]"
                placeholder="ابحث برقم الطلب"
              />
            </label>

            <select
              className="rounded-none  w-[250px]"
              onChange={filterByStatus}
            >
              <option value="no">حالة الطلب ( الكل)</option>
              <option value="true">مؤهل للشروط</option>
              <option value="false">غير مؤهل للشروط</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-end gap-4">
            <div>
              <button className="btn-primary rounded-none">
                ارسل كل الطلبات للتأمينات
              </button>
            </div>
            <div>
              <button className="rounded-none border border-primary py-2 px-4 text-primary">
                ارسل الرفض لكل المقترضين
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mt-7">
          <table className="table-auto overflow-scroll w-full">
            <thead>
              <tr className="font-bold bg-[#f2f2f2] h-[40px] ">
                <td>رقم الطلب</td>
                <td>مبلغ السداد</td>
                <td>مدة السداد</td>
                <td>الربح الكلي</td>
                <td>حالة الطلب</td>
                <td>الإجراء</td>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, x) => (
                <tr key={x} className="border-b h-[50px] border-[#e6e6e6]">
                  <td className="min-w-[100px]">{item.id}#</td>
                  <td className="min-w-[100px]">
                    <div className="flex gap-2">
                      <span className="text-primary font-bold">
                        {item.paymentAmount}
                      </span>
                      <span className="text-[#737373] font-[500] text-[14px]">
                        ريال
                      </span>
                    </div>
                  </td>
                  <td className="min-w-[100px]">
                    <div className="flex gap-2">
                      <span className="text-[#737373] font-bold">
                        {item.repaymentPeriod}
                      </span>
                      <span className="text-[#737373] font-[500] text-[14px]">
                        شهر
                      </span>
                    </div>
                  </td>
                  <td className="min-w-[100px]">
                    <div className="flex gap-2">
                      <span className="text-[#737373] font-bold">
                        {item.totalProfit}
                      </span>
                      <span className="text-[#737373] font-[500] text-[14px]">
                        ريال
                      </span>
                    </div>
                  </td>
                  <td className="min-w-[250px]">
                    {item.isEligible ? (
                      <span className="bg-[#f3fffa] font-bold py-[8pxs] px-[14px] text-[#007a47] ">
                        مؤهل للشروط
                      </span>
                    ) : (
                      <span className="bg-[#f3fffa] font-bold py-[8pxs] px-[14px] text-[#a50000]">
                        غير مؤهل للشروط
                      </span>
                    )}
                  </td>
                  <td>
                    <div>
                      <img
                        src="dashboard/action.webp"
                        className="w-[53px] h-[42px] cursor-pointer hover:scale-110 duration-300"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center items-center mt-7  gap-4">
          <span className="text-[#595959]">الصفحة</span>
          <span>{page}</span>
          <span className="text-[#595959]">من أصل</span>
          <span>{all.length / 10}</span>

          <div className="flex gap-4">
            <button
              onClick={prvPage}
              disabled={page == 1}
              className={`font-bold text-xl   duration-200  
              ${page == 1 ? "text-gray-400" : "text-primary hover:scale-110"}
              `}
            >
              &#x3c;
            </button>
            <button
              onClick={nextPage}
              disabled={page >= all.length / 10}
              className={`font-bold text-xl   duration-200  
              ${
                page >= all.length / 10
                  ? "text-gray-400"
                  : "text-primary hover:scale-110"
              }
              `}
            >
              &#x3e;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
