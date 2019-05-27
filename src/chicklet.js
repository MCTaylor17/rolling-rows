class Chicklet {
  static get inputProperties() {
    return [
      "--columnWidths",
      "--numberOfRows",
      "--borderRadius",
      "--gutters",
      "--rowHeight",
    ];
  };
  
  paint(ctx, geom, properties) {
    const x = 0;
    const y = 0;
    const width = 200;
    const borderRadius = parseInt(properties.get("--borderRadius"));
    const numberOfRows = parseInt(properties.get("--numberOfRows"));
    const rowHeight = parseInt(properties.get("--rowHeight"));
    const gutters = parseInt(properties.get("--gutters"));
    const columnWidths = properties.get("--columnWidths").toString().split("|");
    const columns = this.parseColumns(columnWidths, geom.width, gutters);
    
    columns.map(column => {
      this.fakeCell(ctx, column.x, gutters/2, column.pxWidth, rowHeight - 1, borderRadius);
    });    
  };
  
  parseColumns(columnWidths, fullWidth, gutters) {
    const cols = columnWidths.map(width => {
      const unitWidth = parseInt(width);

      return {
        unitWidth,
        units: width.slice(unitWidth.toString().length),
      };
    });
    
    const withPixelWidths = cols.map(col => {
      if (col.units === "px") {
        col.pxWidth = col.unitWidth - gutters;
      } else if (col.units === "%") {
        col.pxWidth = col.unitWidth/100 * fullWidth - gutters; 
      }
      return col;
    });
    
    const withXVals = withPixelWidths.reduce((columns, column) => {
      const prevCol = columns[columns.length - 1];
      if(!prevCol) {
        column.x = gutters/2;
      } else {
        column.x = prevCol.x + prevCol.pxWidth + gutters;
      } 
      
      columns.push(column);
      return columns;
    },[]);
    
    return withXVals;
  };


  fakeCell(ctx, left, top, width, height, radius) {
    // Note: Math.max is necessary to prevent error in arcTo method
    // Negative widths can occur when large gutters and narrow displays
    if (radius > width / 2) radius = Math.max(0, width / 2);
    if (radius > height / 2) radius = Math.max(0, height / 2);
    
    const right = left + width;
    const bottom = top + height;
    
    ctx.fillStyle = "rgba(255, 255, 255, 0.21)";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    
    // Top Left
    ctx.moveTo(left + radius, top);
    // Top
    ctx.lineTo(right - radius, top);
    // Top Right
    ctx.arcTo(right, top, right, top + radius, radius);
    // Right
    ctx.lineTo(right, bottom - radius);
    // Bottom Right
    ctx.arcTo(right, bottom, right - radius, bottom, radius);
    // Bottom
    ctx.lineTo(left + radius, bottom);
    // Bottom left
    ctx.arcTo(left, bottom, left, bottom - radius, radius);
    // Left
    ctx.lineTo(left, top + radius);
    // Top Left
    ctx.arcTo(left, top, left + radius, top, radius);
    
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    return ctx;
  }
};

registerPaint('chicklet', Chicklet);