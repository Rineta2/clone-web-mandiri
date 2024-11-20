import { currencyRates } from "@/components/ui/data/kalkulator/kurs/data";

export default function CurrencyTable() {
  const parseRate = (value) => {
    if (typeof value === "string") {
      return parseFloat(value.replace(/\./g, "").replace(",", ".")).toFixed(2);
    }
    return value;
  };

  return (
    <div className="overflow-x-auto w-full">
      <h2 className="text-2xl font-bold mb-6 text-primary  text-center">Kurs Bank Mandiri</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2" rowSpan="2">
              Mata Uang
            </th>
            <th
              className="border border-gray-300 px-4 py-2"
              colSpan="2"
            >
              Special Rate*
              <br />
              <span className="text-xs">20/11/24 - 09:24 WIB</span>
            </th>
            <th
              className="border border-gray-300 px-4 py-2"
              colSpan="2"
            >
              TT Counter
              <br />
              <span className="text-xs">20/11/24 - 10:38 WIB</span>
            </th>
            <th
              className="border border-gray-300 px-4 py-2"
              colSpan="2"
            >
              Bank Notes
              <br />
              <span className="text-xs">20/11/24 - 09:23 WIB</span>
            </th>
          </tr>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Beli</th>
            <th className="border border-gray-300 px-4 py-2">Jual</th>
            <th className="border border-gray-300 px-4 py-2">Beli</th>
            <th className="border border-gray-300 px-4 py-2">Jual</th>
            <th className="border border-gray-300 px-4 py-2">Beli</th>
            <th className="border border-gray-300 px-4 py-2">Jual</th>
          </tr>
        </thead>
        <tbody>
          {currencyRates.map((rate) => (
            <tr key={rate.currency}>
              <td className="border border-gray-300 px-4 py-2 text-center">{rate.currency}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {parseRate(rate.specialBuy)}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {parseRate(rate.specialSell)}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {parseRate(rate.ttBuy)}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {parseRate(rate.ttSell)}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {parseRate(rate.bankNotesBuy)}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {parseRate(rate.bankNotesSell)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-sm text-center text-gray-500 mt-4 max-w-[80%] mx-auto">
        *merupakan kurs indikasi untuk transaksi dengan nominal di atas USD
        25.000 (ekivalen), jika nasabah akan bertransaksi dapat segera
        menghubungi cabang untuk mendapatkan kurs yang berlaku
      </p>
    </div>
  );
}
