import { footer } from "@/components/ui/data/Footer";

export default function Pusat() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[20px] text-primary mb-4">Kantor Pusat</h1>
      {footer.map((item) => {
        return (
          <ol key={item.id} className="flex flex-col">
            <li className="text-[16px] text-gray-500">{item.list}</li>
          </ol>
        );
      })}
    </div>
  );
}
