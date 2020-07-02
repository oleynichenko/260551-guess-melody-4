import Mistakes from "./mistakes.jsx";

describe(`Mistakes`, () => {
  it(`should render with zero count`, () => {
    const tree = renderer.create(<Mistakes count={0} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render with one mistake`, () => {
    const tree = renderer.create(<Mistakes count={1} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
