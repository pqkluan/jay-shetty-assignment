export type RootStackParamList = {
  /**
   * Workshop listing screen
   */
  WorkshopListingScreen: undefined;

  /**
   * Workshop details screen
   */
  WorkshopDetailsScreen: { workshopId: string };
};

/**
 * @see https://reactnavigation.org/docs/typescript/#organizing-types
 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
