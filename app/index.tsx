import { animationMenuRoutes } from '@/constants/Routes';
import MenuItem from '@/presentation/menu/MenuItem';
import ThemedView from '@/presentation/shared/ThemedView';
const ComponentsApp = () => {
  return (
    <ThemedView margin safe>
      {
        animationMenuRoutes.map((route, index) => (
          <MenuItem key={ route.title }
            name={ route.name }
            icon={ route.icon }
            title={ route.title }
            isFirst={ index === 0 }
            isLast={ index === animationMenuRoutes.length - 1 }
          />
        ))}

    </ThemedView>
  );
};
export default ComponentsApp;
