
/**
 * Collision Detection
 * @param {*} s source 
 * @param {*} t target
 */
export const onCollisionDetection = (s, t) => {

    let combinedHalfWidths, combinedHalfHeights, vx, vy;

    s.centerX = s.x + s.width / 2;
    s.centerY = s.y + s.height / 2;
    t.centerX = t.x + t.width / 2;
    t.centerY = t.y + t.height / 2;

    s.halfWidth = s.width / 2;
    s.halfHeight = s.height / 2;
    t.halfWidth = t.width / 2;
    t.halfHeight = t.height / 2;

    vx = s.centerX - t.centerX;
    vy = s.centerY - t.centerY;

    combinedHalfWidths = s.halfWidth + t.halfWidth;
    combinedHalfHeights = s.halfHeight + t.halfHeight;

    return Math.abs(vx) < combinedHalfWidths && Math.abs(vy) < combinedHalfHeights
        ? true : false;
};

