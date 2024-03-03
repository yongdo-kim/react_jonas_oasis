import { CabinProp } from "../features/cabins/CabinRow";
import { Inputs } from "../features/cabins/CreateCabinForm";
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins and not be loaded");
  }
  return data as CabinProp[];
}

export async function createCabins(cabin: Inputs) {
  const imageName = `${Math.random()}-${cabin.image.item(0)?.name}`.replace(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  console.log("cabin", {
    ...cabin,
    image: imagePath,
  });
  //1. create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([
      {
        ...cabin,
        image: imagePath,
      },
    ])
    .select();

  if (error) {
    console.log("errro", error);
    throw new Error("Cabins and not be inserted");
  }

  //2. upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabin.image.item(0)!);

  //3. Delete the cain if there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("image", imagePath);
    console.log(storageError);
    throw new Error("Cabin image could not be uploaded and was not created");
  }
  return data;
}

export async function editCabins({ cabin }: { cabin: CabinProp }) {
  console.log("editCabins", cabin);
  const imageName = `${Math.random()}-${cabin.name}`.replace("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //1. create cabin
  const { data, error } = await supabase
    .from("cabins")
    .update({ ...cabin, image: imagePath })
    .eq("id", cabin.id)
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("Cabins and not be updated");
  }

  //2. upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabin.name!);

  //3. Delete the cain if there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("image", imagePath);
    console.log(storageError);
    throw new Error("Cabin image could not be uploaded and was not created");
  }
  return data;
}

export async function deleteCabins(id: number) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabins and not be loaded");
  }
  return data;
}
