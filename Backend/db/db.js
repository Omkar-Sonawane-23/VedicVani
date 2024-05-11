 
 const mongoose = require('mongoose');

 mongoose.connect("mongodb+srv://admin:asv93TqeGVJg16QG@cluster0.orgsvct.mongodb.net/Bg")

const bgChapters = new mongoose.Schema({
        chapter_number: Number,
        verses_count: Number,
        name: String,
        translation: String,
        transliteration: String,
        meaning: {
          en: String,
          hi: String
        },
        summary: {
          en: String,
          hi: String
        },
        sloks:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'bgSlok'
        }]
})

const bgslok = new mongoose.Schema({
         _id: String,
        chapter: Number,
        verse: Number,
        slok: String,
        transliteration: String,
        tej: {
          author: String,
          ht:String
        },
        siva: {
          author: String,
          et: String,
          ec: String,
        },
        purohit: {
          author: String,
          et:String,
        },
        chinmay: {
          author: String,
          hc: String,
        },
        san: {
          author:String,
          et:String
        },
        adi: {
          author:String,
          et: String
        },
        gambir: {
          author: String,
          et: String
        },
        madhav: {
          author: String,
          sc:String
        },
        anand: {
          author:String,
          sc:String
        },
        rams: {
          author: String,
          ht:String
        },
        raman: {
          author: String,
          sc:String,
          et: String
        },
        abhinav: {
          author: String,
          sc: String,
          et: String
        },
        sankar: {
          author: String,
          ht:String,
          sc: String,
          et: String
        },
        jaya: {
            author: String,
            sc:String
        },
        vallabh: {
          author: String,
          sc:String
        },
        ms: {
          author: String,
          sc: String
        },
        srid: {
          author: String,
          sc:String
        },
        dhan: {
          author: String,
          sc:String
        },
        venkat: {
          author: String,
          sc:String
        },
        puru: {
          author:String,
          sc:String
        },
        neel: {
          author: String,
          sc: String
        }
      

})

const bgChapter = mongoose.model('bgChapter', bgChapters);
const bgSlok = mongoose.model('bgSlok', bgslok);

module.exports = { bgChapter, bgSlok }