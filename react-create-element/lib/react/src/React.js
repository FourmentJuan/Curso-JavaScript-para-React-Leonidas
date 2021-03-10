class Component {
  constructor(props = {}, state = {}) {
    this.props = props;
    this.state = state;
  }

  update() {}

  #updater() {
    this.componentWillUpdate();
    this.update(this.render());
    this.componentDidUpdate();
  }

  //se llama antes que se renderice el componente
  componentWillMount() {}

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUpdate() {}

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
    this.#updater();
  }

  build() {
    this.componentWillMount();
    return this.render();
  }
}

export{
  Component
}