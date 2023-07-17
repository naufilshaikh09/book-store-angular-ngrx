import { createAction, props } from "@ngrx/store";
import { Item } from "../../model/catalog.model";

export const itemsLoadedSuccess = createAction(
  "[Items API] Items load success",
  props<{ items: Item[] }>()
)

export const itemsLoadedFailure = createAction(
  "[Items API] Items load fail",
  props<{ error: string }>()
)
