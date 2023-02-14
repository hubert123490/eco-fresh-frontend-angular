export class ResponsiveFilter {
  public windowWidth: number;
  public windowHeight: number;
  public isFilterOpen: boolean;
  private WIDTH_BREAKPOINT: number = 768;

  constructor() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.isFilterOpen = this.windowWidth > this.WIDTH_BREAKPOINT ? true : false;
  }

  public onResize(event: Event): void {
    this.windowWidth = (<Window>event.target).innerWidth;
    this.windowHeight = (<Window>event.target).innerHeight;
    if (this.windowWidth > this.WIDTH_BREAKPOINT && !this.isFilterOpen) {
      this.isFilterOpen = true;
    }
  }

  public toggleFilter(): void {
    this.isFilterOpen = !this.isFilterOpen;
    if (this.windowWidth > this.WIDTH_BREAKPOINT) {
      this.isFilterOpen = true;
    }
  }

  public displayFilter(): boolean {
    if (!this) throw new Error('responsive filter is undefined');
    if (this?.windowWidth > this.WIDTH_BREAKPOINT) return false;
    return true;
  }
}

export class Filter {
  public isFilterOpen : boolean;

  constructor() {
    this.isFilterOpen = false;
  }

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }
}