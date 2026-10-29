import {
    FavoriteBorder as WishlistIcon,
    CompareArrows as CompareIcon,
    VisibilityOutlined as QuickViewIcon,
    ShoppingBagOutlined as CartIcon,
} from '@mui/icons-material';
import type { ProductCardDict } from '@/src/types';
import type { Product } from '@/src/types';

export interface ProductCardAction {
    label: string;
    Icon: typeof WishlistIcon;
    onClick?: (product: Product) => void;
}

export const getProductCardActions = (
    dict: ProductCardDict,
    onToggleWishlist?: (product: Product) => void,
    onCompare?: (product: Product) => void,
    onQuickView?: (product: Product) => void,
    onAddToCart?: (product: Product) => void,
): ProductCardAction[] => [
    {
        label: dict.wishlist,
        Icon: WishlistIcon,
        onClick: onToggleWishlist,
    },
    {
        label: dict.compare,
        Icon: CompareIcon,
        onClick: onCompare,
    },
    {
        label: dict.quickView,
        Icon: QuickViewIcon,
        onClick: onQuickView,
    },
    {
        label: dict.addToCart,
        Icon: CartIcon,
        onClick: onAddToCart,
    },
];
