import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector,
	useStore
} from "react-redux"

import type { RootState, AppDispatch, AppStore } from "./store"

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> =
	useSelector.withTypes<RootState>()

export const useAppStore = useStore.withTypes<AppStore>()
