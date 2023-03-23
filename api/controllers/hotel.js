import Property from "../models/Property.js";

export const createProperty = async (req, res, next) => {
  const newProperty = new Property(req.body);

  try {
    const savedProperty = await newProperty.save();
    res.status(200).json(savedProperty);
  } catch (err) {
    next(err);
  }
};

export const updateProperty = async (req, res, next) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedProperty);
  } catch (err) {
    next(err);
  }
};

export const deleteProperty = async (req, res, next) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json("Property has been deleted ❌");
  } catch (err) {
    next(err);
  }
};

export const getProperty = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id);
    res.status(200).json(property);
  } catch (err) {
    next(err);
  }
};

export const getPropertys = async (req, res, next) => {
  try {
    const properties = await Property.find(req.query).limit(req.query.limit);
    res.status(200).json(properties);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Property.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const propertyCount = await Property.countDocuments({ type: "property" });
    const apartmentCount = await Property.countDocuments({ type: "apartment" });
    const resortCount = await Property.countDocuments({ type: "resort" });
    const villaCount = await Property.countDocuments({ type: "villa" });
    const cabinCount = await Property.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "property", count: propertyCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};
