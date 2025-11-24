import { useRouteQueryParams } from "@/hooks";
import { useCurrencies } from "@/queries";
import { SelectField } from "../ui";

export default function CurrencyField() {
  const { data: currencies, isLoading: isLoadingCurrencies } = useCurrencies();
  const { setParams, getParam } = useRouteQueryParams();
  return (
    <SelectField
      id="activities-currency"
      label="Currency"
      placeholder="Select currency"
      value={getParam("currencyCode")}
      onChange={(value) => setParams({ currencyCode: value })}
      options={
        currencies?.data
          ? currencies.data.map((currency) => ({
              label: `${currency.name} (${currency.code})`,
              value: currency.code,
            }))
          : []
      }
      isLoading={isLoadingCurrencies}
    />
  );
}
