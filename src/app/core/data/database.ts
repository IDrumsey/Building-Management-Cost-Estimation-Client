import { LocationSummary } from "./models/location-summary";

export class Database {
    locations: LocationSummary[] = [
        {
            location: "123 summary st.",
            projects: [
                {
                    title: "Hole in the wall",
                    tasks: [
                        {
                            title: "Demo work",
                            costs: {
                                material: 123.12,
                                labor: 50.0,
                                allInclusive: 20.0
                            }
                        },
                        {
                            title: "Patch hole",
                            costs: {
                                material: 50.12,
                                labor: 100.0,
                                allInclusive: 50.0
                            }
                        },
                        {
                            title: "Paint wall",
                            costs: {
                                material: 100,
                                labor: 50,
                                allInclusive: 25
                            }
                        }
                    ]
                },
                {
                    title: "Broken stair hand rail",
                    tasks: [
                        {
                            title: "Remove old brace",
                            costs: {
                                material: 123.12,
                                labor: 50.0,
                                allInclusive: 20.0
                            }
                        },
                        {
                            title: "Install new brace",
                            costs: {
                                material: 50.12,
                                labor: 100.0,
                                allInclusive: 50.0
                            }
                        }
                    ]
                }
            ]
        },
        {
            location: "456 differentLocation rd.",
            projects: [
                {
                    title: "Leak in roof",
                    tasks: [
                        {
                            title: "Find leak",
                            costs: {
                                material: 123.12,
                                labor: 50.0,
                                allInclusive: 20.0
                            }
                        },
                        {
                            title: "Remove old shingles in the area",
                            costs: {
                                material: 50.12,
                                labor: 100.0,
                                allInclusive: 50.0
                            }
                        },
                        {
                            title: "Patch leak",
                            costs: {
                                material: 100,
                                labor: 50,
                                allInclusive: 25
                            }
                        },
                        {
                            title: "Add new shingles",
                            costs: {
                                material: 100,
                                labor: 50,
                                allInclusive: 25
                            }
                        }
                    ]
                },
                {
                    title: "Broken window",
                    tasks: [
                        {
                            title: "Clean up broken glass",
                            costs: {
                                material: 123.12,
                                labor: 50.0,
                                allInclusive: 20.0
                            }
                        },
                        {
                            title: "Remove old frame",
                            costs: {
                                material: 50.12,
                                labor: 100.0,
                                allInclusive: 50.0
                            }
                        },
                        {
                            title: "Install new frame",
                            costs: {
                                material: 50.12,
                                labor: 100.0,
                                allInclusive: 50.0
                            }
                        }
                    ]
                }
            ]
        },
        {
            location: "456 differentLocation rd.",
            projects: [
                {
                    title: "Carpet needs to be replaced",
                    tasks: [
                        {
                            title: "Remove old carpet",
                            costs: {
                                material: 123.12,
                                labor: 50.0,
                                allInclusive: 20.0
                            }
                        },
                        {
                            title: "Install new carpet",
                            costs: {
                                material: 50.12,
                                labor: 100.0,
                                allInclusive: 50.0
                            }
                        }
                    ]
                }
            ]
        }
    ]
}
