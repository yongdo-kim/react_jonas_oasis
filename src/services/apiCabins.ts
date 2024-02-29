import { CabinProps } from "../features/cabins/CabinTable";
import { Inputs } from "../features/cabins/CreateCabinForm";
import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins and not be loaded");
  }
  return data as CabinProps[];
}

export async function createCabins(cabins: Inputs) {
  console.log(cabins);
  // const { data, error } = await supabase.from("cabins").insert([
  //   {
  //     name: cabins.name,
  //     maxCapacity: cabins.maxCapacity,
  //     regularPrice: cabins.regularPrice,
  //     discount: cabins.discount,
  //   },
  // ]);
  // if (error) {
  //   console.log(error);
  //   throw new Error("Cabins and not be inserted");
  // }
  // return data;
}

export async function deleteCabins(id: number) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabins and not be loaded");
  }
  return data;
}
