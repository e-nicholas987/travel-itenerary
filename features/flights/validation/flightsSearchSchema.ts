import { z } from "zod";

import { nonRequiredString, requiredString } from "@/lib/utils/zodHelpers";

export const flightsSearchSchema = z
  .object({
    fromId: requiredString("Departure airport or city is required"),
    toId: requiredString("Arrival airport or city is required"),
    departDate: requiredString("Departure date is required"),
    returnDate: nonRequiredString,
    adults: nonRequiredString,
    children: nonRequiredString.refine(
      (value) => {
        if (!value) return true;

        const num = Number(value);
        if (Number.isNaN(num)) return false;

        return num >= 1 && num <= 17;
      },
      {
        message: "Children age must be between 0 and 17",
      }
    ),
    cabinClass: nonRequiredString,
    sort: nonRequiredString,
    stops: nonRequiredString,
    currency_code: nonRequiredString,
  })
  .refine(
    (values) => {
      if (!values.returnDate) return true;

      const depart = new Date(values.departDate);
      const ret = new Date(values.returnDate);

      if (Number.isNaN(depart.getTime()) || Number.isNaN(ret.getTime())) {
        return true;
      }

      return ret >= depart;
    },
    {
      path: ["returnDate"],
      message: "Return date must be on or after departure date",
    }
  )
  .refine(
    (values) => {
      if (!values.departDate) return true;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const depart = new Date(values.departDate);
      if (Number.isNaN(depart.getTime())) {
        return true;
      }

      return depart > today;
    },
    {
      path: ["departDate"],
      message: "Departure date must be after today",
    }
  )
  .refine(
    (values) => {
      if (!values.returnDate) return true;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const ret = new Date(values.returnDate);
      if (Number.isNaN(ret.getTime())) {
        return true;
      }

      return ret > today;
    },
    {
      path: ["returnDate"],
      message: "Return date must be after today",
    }
  );

export type FlightsSearchFormValues = z.infer<typeof flightsSearchSchema>;
