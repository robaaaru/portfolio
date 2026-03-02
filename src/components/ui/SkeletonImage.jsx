import { useState } from 'react';

function PlaceholderIcon() {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Sun */}
            <circle cx="16" cy="8" r="2.5" fill="#bbb" />
            {/* Mountains */}
            <path
                d="M3 18l5-7 3.5 4.5L15 11l6 7H3z"
                fill="#ccc"
            />
        </svg>
    );
}

export default function SkeletonImage({ src, alt, className = '', style, ...props }) {
    const [loaded, setLoaded] = useState(false);

    if (loaded) {
        return (
            <img
                src={src}
                alt={alt}
                className={className}
                style={style}
                {...props}
            />
        );
    }

    return (
        <>
            <div
                className={className}
                style={{
                    ...style,
                    // aspect-ratio only kicks in when height isn't set by className (e.g. h-48, h-full).
                    // When only width is defined (w-full), this makes the skeleton a square.
                    aspectRatio: '1 / 1',
                    backgroundColor: '#e9e9e9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                aria-hidden="true"
            >
                <PlaceholderIcon />
            </div>
            {/* Hidden img to trigger browser fetch and onLoad */}
            <img
                src={src}
                alt={alt}
                style={{ display: 'none' }}
                onLoad={() => setLoaded(true)}
            />
        </>
    );
}
